import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Can from "../compoents/Can";
import Logout from "../compoents/Logout";
import Profile from "../compoents/Profile";
import PostsList from "../compoents/PostsList";

const DashboardPage = () => (
    <AuthConsumer>
        {({ user }) => (
            <Can
                role={user.role}
                perform="dashboard-page:visit"
                yes={() => (
                    <div>
                        <h1>Dashboard</h1>
                        <Logout />
                        <Profile />
                        <PostsList />
                    </div>
                )}
                no={() => <Redirect to="/" />}
            />  
        )}
    </AuthConsumer>
);

export default DashboardPage;