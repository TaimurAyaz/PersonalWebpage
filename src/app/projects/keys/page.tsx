import MarkdownView from "@/components/MarkdownView";

export default function Page() {
    return (
        <div>
            <div className="flex">
                <div className="fixed h-32 w-screen">
                    foos
                </div>
                <div className="mx-auto mt-64">
                    <MarkdownView markdownUrl="https://raw.githubusercontent.com/TaimurAyaz/personal_webpage/master/content/keys_pp.md" />
                </div>
            </div>
        </div>
    )
}
