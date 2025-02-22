
interface TextProps{
    text:string
}
export default function BigHeader ({text}:TextProps){

    return (
        <h1 className="text-4xl font-medium text-white">{text}</h1>
    );

}