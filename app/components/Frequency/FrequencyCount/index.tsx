export default function FrequencyCount({ count = 1 }: { count?: number } = {}) {
    return (
        <span>
            {count}x
        </span>
    )
}