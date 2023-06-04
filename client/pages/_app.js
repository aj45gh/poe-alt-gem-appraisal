import '../styles/global.scss';

export default function MyPage() {
    const gems = [
        {
            name: 'absolution',
            qualityTypes: [
                {
                    qualityType: 'superior',
                    priceAmount: 1,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'anomalous',
                    priceAmount: 6,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'divergent',
                    priceAmount: 5,
                    priceCurrency: 'chaos'
                }
            ]
        },
        {
            name: 'arc',
            qualityTypes: [
                {
                    qualityType: 'superior',
                    priceAmount: 1,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'anomalous',
                    priceAmount: 15,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'divergent',
                    priceAmount: 30,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'phantasmal',
                    priceAmount: 20,
                    priceCurrency: 'chaos'
                }
            ]
        },
        {
            name: 'determination',
            qualityTypes: [
                {
                    qualityType: 'superior',
                    priceAmount: 1,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'anomalous',
                    priceAmount: 10,
                    priceCurrency: 'chaos'
                },
                {
                    qualityType: 'divergent',
                    priceAmount: 2,
                    priceCurrency: 'divine'
                }
            ]
        }
    ];

    return (
        <div className='container is-fluid'>
            <nav className='navbar' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a className='navbar-item' href='/'>
                        <img src='/images/currency-icons/chaos-orb.png' alt='chaos orb icon'></img>
                    </a>
                </div>
            </nav>
            <div className='columns'>
                <div className='column is-full'>
                    <table className='table is-fullwidth'>
                        <thead>
                            <tr>
                                <th scope='column'>Gem</th>
                                <th scope='column'>Quality Type</th>
                                <th scope='column'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='is-capitalized'>
                            {
                                gems.map((gem) => (
                                    <GemRow gem={gem} key={gem.name} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

function GemRow({ gem }) {
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
                <AlternateQualityRow qual={gem.qualityTypes[0]} />
            </tr>
            {
                additionalRows.map((qual) => (
                    <tr key={`${gem.name}-${qual.qualityType}`}>
                        <AlternateQualityRow qual={qual} />
                    </tr>
                ))
            }
        </>
    )
}

function AlternateQualityRow({ qual }) {
    return (
        <>
            <td>{qual.qualityType}</td>
            <td>
                <span className='tag is-dark'>
                    {qual.priceAmount}
                    <span className='icon ml-1'>
                        <img
                            src={`images/currency-icons/${qual.priceCurrency}-orb.png`}
                            alt={`${qual.priceCurrency} orb icon`}
                        />
                    </span>
                </span>
            </td>
        </>
    )
}
