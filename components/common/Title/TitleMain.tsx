type tText = {
    text: string
}
export default function TitleMain({ text }: tText) {
    return <div className="flex justify-start">
        <div className="h-[100px] flex items-start md:text-heading-prepre-xl text-heading-l-bold">
            {text}
        </div>
    </div>
}