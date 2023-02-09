import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        fetch(`localhost:4000/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.IsSeller)
                setIsSellerLoading(false)
            })
    }, [email])

    return [isSeller, isSellerLoading]
}

export default useSeller;