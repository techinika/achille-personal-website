import { useRouter } from "next/dist/client/router"

export const Nav = ({title}) => {
    const router = useRouter();

    return (
        <>
            <div className="nav">
                <p className="backBtn" onClick={e=>{
                    e.stopPropagation();
                    router.push("/")
                }}>🔙</p>
                <p>{title}</p>
            </div>
        </>
    )
}