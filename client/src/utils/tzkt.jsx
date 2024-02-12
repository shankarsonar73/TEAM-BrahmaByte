import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://api.ghostnet.tzkt.io/v1/contracts/KT1TNE7pfAggMKxFqpa5gjQYPYB6nnkdzcAX/storage"
    );
    return res.data;
};
