import { Link } from "react-router";
 
 
 const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((currentMailbox) => (
                    <li key={currentMailbox.boxOwner}>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                            {currentMailbox.boxOwner}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList;