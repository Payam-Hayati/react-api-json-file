import data from "../data.json";

const LocalJson = () => {
    return (
        <>
            <div className="mt-4">
                <h2 className="font-semibold italic">Read Local JSON File</h2>
                {data &&
                    data.map((record) => {
                        return (
                            <div key={record.id}>
                                <span>{record.id}</span>
                                <span>{record.title}</span>
                                <p>{record.content}</p>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default LocalJson;
