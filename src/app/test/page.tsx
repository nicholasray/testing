import Link from "next/link";
import Counter from "./Counter";

export default function Article() {
	return (
		<div><Link href={"/"}>BlahHome</Link>
		<Counter/>
		</div>
	)
}
