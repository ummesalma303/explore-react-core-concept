export default function Obj({name,price}) {
    return (
        <li>Name:{name} Price:{price<400?price + ' i wanna buy this book': price + ' i need some money'}</li>
    )
}