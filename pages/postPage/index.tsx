import { useRouter } from "next/router";

export default function postPage() {
	const router = useRouter();
	return <div>test {router.query.id}</div>;
}
