import LoaderView from "./LoaderView";

export default function LoadingPage() {
    return (
        <div className="flex w-screen h-screen">
            <LoaderView additionalClasses="m-auto" additionalSpinnerClasses="bg-black dark:bg-white" />
        </div>
    )
}
