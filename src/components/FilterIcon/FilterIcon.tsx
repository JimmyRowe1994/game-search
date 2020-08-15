import React from "react";
import styles from "./FilterIcon.module.scss";

interface Props {
    name: string;
    image: string;
    handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterIcon: React.FC<Props> = ({ name, image, handleCheck }) => {
    return (
        <>
            <input className={styles.filterCheckbox} type="checkbox" defaultChecked id={`${name}-checkbox`} name={name} onChange={handleCheck} />
            <label className={styles.filterLabel} htmlFor={`${name}-checkbox`}>
                <img className={styles.filterImage} src={image} alt={`${name} logo`} />
            </label>
        </>
    )
}