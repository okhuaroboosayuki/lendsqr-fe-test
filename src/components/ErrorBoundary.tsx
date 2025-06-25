import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    const noInternet = window.navigator.onLine === false;
    return (
      <div className="error_page">
        <h1>OOPS! An Error Occurred 😭</h1>
        <p>{noInternet ? "No Internet Connection" : error.message}</p>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
