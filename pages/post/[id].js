import { useRouter } from "next/dist/client/router"

export default function Post(){
    const router = useRouter()
    return(
        <div>Ну пост {router.query.id} и че</div>
    )
}