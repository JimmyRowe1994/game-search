import React from "react";
import styles from "./App.module.scss";
import FilterIcon from "../components/FilterIcon";
import { useWebsiteData } from "../hooks/useWebsiteData";

export const App = () => {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const websites = useWebsiteData(searchValue);
    const [filters] = React.useState<Array<string>>(Object.keys(websites));
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) => {
        const value = event.target.value;
        setValue(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(filters.length === 0) {
            alert("Please select at least one website to search.");
        } else if (!searchValue) {
            alert("Please enter the name of a game to search.");
        } else {
            filters.forEach((filter) => {
                window.open(websites[filter].url, "_blank");
            })
        }
    }

    const handleCheck = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? filters.push(event.target.name) : filters.splice(filters.indexOf(event.target.name), 1);
    }, [filters]);

    const generateFilters = () => (
        Object.keys(websites).map((website, index) => <FilterIcon key={`filter-${index}`} name={website} image={websites[website].logo} handleCheck={handleCheck} />)
    )

    return (
        <div className={styles.app}>
            <section className={styles.searchArea}>
                <form className={styles.searchForm} onSubmit={event => handleSubmit(event)}>
                    <h1 className={styles.title}>Game Search</h1>
                    <input className={styles.searchInput} type="text" placeholder="God of War" value={searchValue} onChange={event => handleChange(event, setSearchValue)} />
                    <input className={styles.searchSubmit} type="submit" value="Search" />
                </form>
            </section>

            <section className={styles.filterSection}>
                <h2 className={styles.filtersTitle}>Filters</h2>
                <p className={styles.filtersDescription}>Select/deselect the websites you want to search.</p>
                <div className={styles.filterContainer}>
                    {generateFilters()}
                </div>
            </section>
        </div>
    )
}