

function quotTemplate(quote) {
    return `
    <tr>
    <th>
    ${quote.date}
    </th>
    <td>
    ${quote.mor}
    </td>
    <td>
    ${quote.day}
    </td>
    <td>
    ${quote.eve}
    </td>
    <td>
    ${quote.ext}
    </td>
</tr>
`;
}

document.getElementById("numbertable").innerHTML = `${targetNumber.map(quotTemplate)}`;