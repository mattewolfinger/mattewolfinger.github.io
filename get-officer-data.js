

let officer = {
    active: 1, employee_id: '11597', name: 'Deery, Sean F', organization: 'E-18 Detective', title: 'Police Detective', doa: '3/20/1996', badge:'6732', zipcode: '02184', city: 'Braintree', state: 'MA', neighborhood:'', lastUpdated: '2020-07-15'};

let complaints = [
    {ia_number: 'IAD2017-0008', incident_type: 'Citizen complaint', received_date: '1/10/2017', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Respectful Treatment', finding: 'Not Sustained', finding_date: '2/29/2020', penalty: ''},
    {ia_number: 'IAD2019-0523', incident_type: 'Internal investigation', received_date: '11/20/2019', name: 'Deery, Sean F', title: 'Detective', badge: '6732', employee_id: '11597', allegation: 'Alcohol off Duty', finding: 'Sustained', finding_date: '1/18/2020', penalty: ''},
    {ia_number: 'IAD2019-0523', incident_type: 'Internal investigation', received_date: '11/20/2019', name: 'Deery, Sean F', title: 'Detective', badge: '6732', employee_id: '11597', allegation: 'Conduct Unbecoming', finding: 'Sustained', finding_date: '1/18/2020', penalty: ''},
    {ia_number: 'IAD2019-0523', incident_type: 'Internal investigation', received_date: '11/20/2019', name: 'Deery, Sean F', title: 'Detective', badge: '6732', employee_id: '11597', allegation: 'Conformance to Laws', finding: 'Sustained', finding_date: '1/18/2020', penalty: ''},
    {ia_number: 'IAD2019-0523', incident_type: 'Internal investigation', received_date: '11/20/2019', name: 'Deery, Sean F', title: 'Detective', badge: '6732', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge', finding: 'Sustained', finding_date: '1/18/2020', penalty: ''},
    {ia_number: '103', incident_type: 'Citizen complaint', received_date: '12/19/2002', name: 'Deery, Sean F', title: 'Police Officer', badge: '1496', employee_id: '11597', allegation: 'Use of Force', finding: 'Withdrawn', finding_date: '', penalty: ''},
    {ia_number: '19905', incident_type: 'Citizen complaint', received_date: '10/20/2005', name: 'Deery, Sean F', title: 'Police Officer', badge: '1496', employee_id: '11597', allegation: 'Respectful Treatment', finding: 'Not Sustained', finding_date: '', penalty: ''},
    {ia_number: 'E2008-083', incident_type: 'Citizen complaint', received_date: '12/10/2008', name: 'Deery, Sean F', title: 'Police Officer', badge: '1496', employee_id: '11597', allegation: 'Respectful Treatment', finding: 'Not Sustained', finding_date: '3/28/2009', penalty: ''},
    {ia_number: 'E2009-011', incident_type: 'Citizen complaint', received_date: '2/4/2009', name: 'Deery, Sean F', title: 'Police Officer', badge: '1496', employee_id: '11597', allegation: 'Use of Force', finding: 'Exonerated', finding_date: '12/23/2009', penalty: ''},
    {ia_number: '21303', incident_type: 'Citizen complaint', received_date: '9/11/2003', name: 'Deery, Sean F', title: 'Police Officer', badge: '1496', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge', finding: 'Unfounded', finding_date: '', penalty: ''},
    {ia_number: '21303', incident_type: 'Citizen complaint', received_date: '9/11/2003', name: 'Deery, Sean F', title: 'Police Officer', badge: '1496', employee_id: '11597', allegation: 'Use of Force', finding: 'Unfounded', finding_date: '', penalty: ''},
    {ia_number: 'E2010-030', incident_type: 'Citizen complaint', received_date: '3/12/2010', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge', finding: 'Not Sustained', finding_date: '5/14/2012', penalty: 'Oral Reprimand'},
    {ia_number: 'E2010-030', incident_type: 'Citizen complaint', received_date: '3/12/2010', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge', finding: 'Sustained', finding_date: '5/14/2012', penalty: ''},
    {ia_number: 'E2010-100', incident_type: 'Citizen complaint', received_date: '9/10/2010', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Strip Search and or Visual Body Cavity Search', finding: 'Unfounded', finding_date: '2/4/2011', penalty: ''},
    {ia_number: 'E2010-100', incident_type: 'Citizen complaint', received_date: '9/10/2010', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Use of Force', finding: 'Unfounded', finding_date: '2/4/2011', penalty: ''},
    {ia_number: 'IAD2011-0538', incident_type: 'Internal investigation', received_date: '11/25/2011', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Collection of Evidence', finding: 'Sustained', finding_date: '5/8/2012', penalty: ''},
    {ia_number: 'IAD2011-0538', incident_type: 'Internal investigation', received_date: '11/25/2011', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Courts (3 counts)', finding: 'Sustained', finding_date: '5/8/2012', penalty: ''},
    {ia_number: 'IAD2011-0538', incident_type: 'Internal investigation', received_date: '11/25/2011', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge', finding: 'Sustained', finding_date: '5/8/2012', penalty: ''},
    {ia_number: 'IAD2011-0538', incident_type: 'Internal investigation', received_date: '11/25/2011', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge (4 counts)', finding: 'Sustained', finding_date: '5/8/2012', penalty: ''},
    {ia_number: 'IAD2014-0028', incident_type: 'Citizen complaint', received_date: '1/31/2014', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Respectful Treatment Bias', finding: 'Not Sustained', finding_date: '2/2/2017', penalty: ''},
    {ia_number: 'IAD2014-0089', incident_type: 'Citizen complaint', received_date: '3/10/2014', name: 'Deery, Sean F', title: 'Police Officer', badge: '6732', employee_id: '11597', allegation: 'Neg.Duty/Unreasonable Judge (2 counts)', finding: 'Exonerated', finding_date: '9/5/2017', penalty: ''}
];


// Officer name
d3.select("#officer-name").html(officer.name);

// Officer title
d3.select("#officer-title").html(officer.title);

// Officer badge ID
d3.select("#officer-badge").html(officer.badge);

// Officer organization
d3.select("#officer-org").html(officer.organization);

// Officer active status (will translate the 1 to "ACTIVE")
// d3.select("#officer-active").html(officer.active);


complaints.forEach(function(complaint) {

    let div = d3.select("#complaints-container")
        .append("div")
        .attr("class", "allegation");

    // Allegation
    div.append("h3")
        .attr("class", "allegation--detail")
        .html(complaint.allegation);

    // Finding
    div.append("h4").html(complaint.finding);

    // Penalty
    div.append("p").html(`Penalty: ${complaint.penalty}`);

    // Incident date
    div.append("h5").html(complaint.received_date);


});
