
interface TextProps{
    text:string,
    className?:string
}
export default function BigHeader ({text,className=""}:TextProps){

    return (
        <h1 className={`  ${className == ""?"text-4xl font-medium text-white":className}`}>{text}</h1>
    );

}