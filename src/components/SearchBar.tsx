import "./SearchBar.css";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {

    function handleClear() {
        onChange("");
    }

    return(
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Rechercher un article..."
            />

            {value !== "" && (
                <button className="search-bar__clear" onClick={handleClear}>
                    Effacer
                </button>
            )}
        </div>
    )
}