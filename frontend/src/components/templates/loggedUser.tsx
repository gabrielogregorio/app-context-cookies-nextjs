import React from "react";
import Footer from "../layout/footer";

interface LoggedUserInterface {
    children: any
}

export default function LoggedUserTemplate({ children }: LoggedUserInterface){

    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )

}