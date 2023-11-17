type tName = {
    name: string
}
export default function GreenButton({ name }: tName) {
    return <div className="md:text-text-l text-text-l-m-m rounded-[100px] text-black md:px-6 px-4 py-2 bg-green flex justify-center">{name}</div>
}