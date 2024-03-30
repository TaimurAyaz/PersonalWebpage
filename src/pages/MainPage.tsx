import { useState, useEffect } from "react";
import remarkGfm from 'remark-gfm'
import Markdown from "react-markdown";
import LoaderView from "../LoaderView";

export default function MainPage() {
    const [markdown, setMarkdown] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function fetchFromAPI() {
            let response = await fetch('https://raw.githubusercontent.com/TaimurAyaz/taimurayaz.github.io/master/README.md')
            let blob = await response.blob()
            let text = await blob.text()
            await new Promise((res) => setTimeout(res, 5000));
            setMarkdown(text)
        }
        fetchFromAPI()
    }, []);

    return (
        <div className="px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 prose prose-zinc dark:prose-invert prose-inline-code:bg-black prose-inline-code:p-1 prose-inline-code:rounded-md">
                {markdown === undefined ?
                    <LoaderView additionalClasses="text-white mx-auto" />
                    :
                    <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}
            </div>
        </div>
    );
}
