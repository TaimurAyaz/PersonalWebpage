import { useState, useEffect } from "react";
import remarkGfm from 'remark-gfm'
import Markdown from "react-markdown";
import LoaderView from "./LoaderView";

async function markdownText(url: string) {
    try {
        const response = await fetch(url)
        const blob = await response.blob()
        const text = await blob.text()
        return text
    } catch (error) {
        console.log(`Error: Calling GET: ${error})`)
        return ""
    }
}

export default async function MarkdownView(props: { markdownUrl: string }) {
    const markdown = await markdownText(props.markdownUrl)

    return (
        // <div className="px-6 py-32 lg:px-8">
            
        // </div>
        <div className="mx-auto max-w-3xl text-base leading-7 prose prose-zinc dark:prose-invert dark:prose-inline-code:bg-black prose-inline-code:bg-zinc-200 prose-inline-code:px-1.5 prose-inline-code:py-1 prose-inline-code:rounded-md prose-inline-code:before:content-none prose-inline-code:after:content-none">
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
    )
}