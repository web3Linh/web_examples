import { log } from "console"
import { useRouter } from "next/router"

export default function PortfolioProjectPage() {
    const router = useRouter()
    console.log(router.pathname)
    // 对象
    console.log(router.query)

    return (
      <div>
        <h2>The PortfolioProjectPage Page----{router.query.projectid}</h2>
      </div>
    )
  }