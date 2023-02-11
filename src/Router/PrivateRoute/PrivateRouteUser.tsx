import React, { lazy, Suspense } from "react";

import Loader from "Components/UI-KIT/Loader";

const LazyCabinet = lazy(() => import("Layout/Cabinet"));

const PrivateRouteUser = () => {
	return (
		<Suspense fallback={<Loader />}>
			<LazyCabinet />
		</Suspense>
	);
};

export default PrivateRouteUser;
