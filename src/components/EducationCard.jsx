export default function EducationCard({ school }) {
    return (
        <div>
            <div>
                <div>{school.logo}</div>
                <div>
                    <span>{school.degree}</span>
                    <span>{school.field}</span>
                    <span>{school.name}</span>
                    <span>{school.duration}</span>
                </div>
                <div>{school.status}</div>
            </div>
            <div></div>
        </div>
    );
}
