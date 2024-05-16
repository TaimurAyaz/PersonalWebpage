import { NextResponse } from "next/server";

enum ResourceType {
    privacyPolicy = "text:https://raw.githubusercontent.com/TaimurAyaz/personal_webpage/master/content/keys_pp.md",
    termsOfUse = "text:https://raw.githubusercontent.com/TaimurAyaz/personal_webpage/master/content/keys_tos.md"
}

enum ResourceDataType {
    text = "text",
    json = "json",
    image = "image"
}

function splitStringAtFirstOccurrence(inputString: string, separator: string): [string, string] {
    // Find the index of the first occurrence of the separator
    const separatorIndex = inputString.indexOf(separator);

    // If separator not found or found at the beginning, return original string as the first part
    if (separatorIndex === -1 || separatorIndex === 0) {
        return [inputString, ''];
    }

    // Split the string into two parts based on the first occurrence of the separator
    const firstPart = inputString.substring(0, separatorIndex);
    const secondPart = inputString.substring(separatorIndex + 1);

    return [firstPart, secondPart];
}

function as<E>(enumObj: { [k: string]: E }, str: string | null | undefined,): E | undefined {
    if (str === undefined || str === undefined) {
        return undefined
    }
    // Directly access the enum using the string, after asserting the string as a key of the enum
    const casted = enumObj[str as keyof typeof enumObj];
    // Check if the value exists in the enum (this also handles numeric enums correctly)
    if (Object.values(enumObj).includes(casted)) {
        return casted; 
    }
    return undefined;
}

function resourceFrom(str: string | null | undefined): [ResourceDataType, string] | undefined {
    if (str === undefined || str === null || str.length === 0) {
        return undefined
    }

    const resourceType = as(ResourceType, str)
    if (resourceType === undefined) {
        return undefined
    }

    const splitStr = splitStringAtFirstOccurrence(resourceType, ":")

    if (splitStr.length !== 2) {
        return undefined
    }

    const resourceDataTypeString = splitStr[0]
    const url = splitStr[1]

    const resourceDataType = as(ResourceDataType, resourceDataTypeString)
    if (resourceDataType === undefined) {
        return undefined
    }

    if (url.length === 0) {
        return undefined
    }

    return [resourceDataType, url]
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const resource = resourceFrom(searchParams.get('type'))

        if (resource === undefined) {
            throw `Invalid resource param: type -> ${searchParams.get('type')}`
        }

        const response = await fetch(resource[1])

        switch (resource[0]) {
            case ResourceDataType.text:
                {
                    let blob = await response.blob()
                    let text = await blob.text()
                    return Response.json({
                        markdownText: text
                    }) 
                }  
            case ResourceDataType.json:
                {
                    let json = await response.json()
                    return NextResponse.json(json)
                }
            default:
                throw `Invalid param: type -> ${searchParams.get('type')}`
        }
    } catch (error) {
        console.log(`Error: Calling GET: ${error})`)
        return NextResponse.error()
    }
}