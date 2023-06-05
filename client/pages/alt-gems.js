export async function getServerSideProps() {
    const res = await fetch("http://api:8000/altGems");
    const gems = await res.json();

    return { props: { gems } };
}

export default function AltGems({ gems }) {
    return (
        <div className='container is-fluid'>
            <div className='columns'>
                <div className='column is-full'>
                    <table className='table is-fullwidth'>
                        <thead>
                            <tr>
                                <th scope='col'>Gem</th>
                                <th scope='col'>Quality Type</th>
                                <th scope='col'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='is-capitalized'>
                            {
                                gems.map((gem) => (
                                    <GemDataRow gem={gem} key={gem.name} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


function GemDataRow({ gem }) {
    const additionalRows = gem.qualityTypes.slice(1);

    return (
        <>
            <tr>
                <td rowSpan={gem.qualityTypes.length}>
                    <span className='tag is-dark'>
                        <span className='icon mr-1'>
                            <img
                                src={`images/gem-icons/${gem.name}.png`}
                                alt={`${gem.name} gem icon`}
                            />
                        </span>
                        {gem.name}
                    </span>
                </td>
                <GemPriceRow gemPrice={gem.qualityTypes[0]} />
            </tr>
            {
                additionalRows.map((gemPrice) => (
                    <tr key={`${gem.name}=${gemPrice.qualityType}`}>
                        <GemPriceRow gemPrice={gemPrice} />
                    </tr>
                ))
            }
        </>
    )
}

function GemPriceRow({ gemPrice }) {
    return (
        <>
            <td>{gemPrice.qualityType}</td>
            <td>
                <span className='tag is-dark'>
                    {gemPrice.priceAmount}
                    <span className='icon ml-1'>
                        <img
                            src={`images/currency-icons/${gemPrice.priceCurrency}-orb.png`}
                            alt={`${gemPrice.priceCurrency} orb icon`}
                        />
                    </span>
                </span>
            </td>
        </>
    )
}