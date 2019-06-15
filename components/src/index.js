import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";
import faker from "faker";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author = "Sam"
                    timeAgo = "Today at 6:00PM"
                    comment = "Nice blog written"
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Aditya"
                    timeAgo = "Today at 6:30PM"
                    comment = "Good but can do better"
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Nancy"
                    timeAgo = "Today at 7:12PM"
                    comment = "Motivational"
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Shubham"
                    timeAgo = "Today at 7:38PM"
                    comment = "Amazing, keep up !"
                    avatar = {faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
