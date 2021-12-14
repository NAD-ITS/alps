import React from "react";
import {Button} from "../../../atoms/button/Button";

export interface CommentFormProps {
    onSubmit?: () => void,
    /**
     * Specify the rows of your CommentForm
     */
    rows?: number,
    /**
     * Specify the submitLabel of your CommentForm
     */
    submitLabel?: string,
    /**
     * Specify the title of your CommentForm
     */
    title?: string,
}

export const CommentForm = ({
                                onSubmit,
                                rows = 8,
                                submitLabel = "Post Comment",
                                title = "Leave a Comment",
                                ...props
                            }: CommentFormProps): JSX.Element => {
    return (
        <form className="c-form c-comment-form u-spacing--half" noValidate {...props}>
            <h3 className={"u-font--secondary--m u-text--strong u-text-transform--upper u-theme--color--darker"}>{title}</h3>
            <textarea
                aria-required={true}
                name="comment"
                required={true}
                rows={rows}
            />
            <Button label={submitLabel} onClick={onSubmit}/>
        </form>
    )
}
