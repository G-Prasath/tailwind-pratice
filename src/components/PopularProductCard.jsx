import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
            <div className="mt-5 flex justify-starts gap-2.5">
                <img src={star} alt="ratings" width={18} height={18} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray text-[16px]">(4.5)</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">{price}</p>
        </div>
    )
}

export default PopularProductCard