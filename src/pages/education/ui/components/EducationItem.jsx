const EducationItem = ({ item, itemRef }) => {
    return (
        <div ref={itemRef} className="border-b hairline-dark pb-8">
            <p className="font-mono text-sm text-[var(--ink-dim)] mb-2">{item.period}</p>
            <h3 className="font-display uppercase text-xl md:text-2xl mb-1">{item.degree}</h3>
            <p className="font-medium mb-1">{item.school}</p>
            <p className="text-sm text-[var(--ink-dim)]">{item.note}</p>
        </div>
    );
};

export default EducationItem;
