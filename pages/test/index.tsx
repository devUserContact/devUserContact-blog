import type { NextPage } from "next";
import gqlFetch from "../../utils/gqlFetch";

const Test: NextPage = () => {
		
	const { data } = gqlFetch();
};
export default Test;
