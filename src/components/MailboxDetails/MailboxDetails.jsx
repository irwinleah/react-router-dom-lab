// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from "react-router";
import './MailboxDetails.css';

const MailboxDetails = (props) => {
    console.log(props);
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (
       mailbox._id === Number(mailboxId)
    ));

    console.log(selectedBox)
    return (
        <>
            <h2>{selectedBox.name}</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{selectedBox.size}</dd>
                <dt>Box Owner:</dt>
                <dd>{selectedBox.boxOwner}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails;
