const hous = {
    door: 'Из дуба',
    sofa: 'Из кожи'
}

const companyInfo = {typeHome: 'Панелька', ...hous, id: 123};

console.log(companyInfo)