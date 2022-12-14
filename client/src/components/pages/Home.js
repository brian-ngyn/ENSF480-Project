
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { useUserAuth } from "../authentication/UserAuthContext";
import KoolContainer from "../KoolContainer/KoolContainer";
import { Button , Typography } from "@mui/material";


const Home = () => {
  const { user } = useUserAuth();
  const isLoggedIn = user == null ? false : true;
  // const { tickets } = getTickets();

  // const ticketList = tickets.map((ticket) => {
  //   return (
  //     <div className="p-5">
  //       <h2
  //         className="text-2xl"
  //       >
  //         {ticket}
  //       </h2>
  //     </div>
  //   );
  // });

  return (
    <>
      <KoolContainer>
        <div className="flex flex-col items-center justify-center h-full">
          {isLoggedIn ? (
            <div>
              <h1 className="text-6xl">Welcome back to KoolTickets, {user.fullname}</h1>
              {/* {ticketList} */}
            </div>
          ) : (
            <div>
              <h1 className="text-6xl">Welcome to KoolTickets!</h1>
              <h1 className="text-4xl mt-8">Please <Link to="/login" className="underline">Sign in</Link> or continue as guest from the <Link to="/theatres" className="underline">theatre tab</Link></h1> </div>
          )}
        </div>
      </KoolContainer>
    </>
  );
};

export default Home;
