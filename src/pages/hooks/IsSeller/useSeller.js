

import { useEffect, useState } from "react"
const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)

    useEffect(() => {
        if (email) {

            fetch(`https://furnica-server.onrender.com/users1/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log(email)
                    setIsSeller(data.isSeller)
                })
        }
    }, [email])

    return [isSeller]
}
export default useSeller;