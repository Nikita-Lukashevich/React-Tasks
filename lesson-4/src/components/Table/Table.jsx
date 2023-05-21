import BtnSort from "../BtnSort/BtnSort";
import Contact from '../Contact/Contact'
import { useState } from "react";

function Table(props) {
  const { persons } = props;
  const { sortName } = props;
  const { sortNumber } = props;
  const { sortAddress } = props;
  const { btnvalue } = props;
  const [contactflag, setContactFlag] = useState(false);

  const contactPerson = (person) => {
    setContactFlag(person);
};

  if (!persons || !persons.length) return <p>Нет данных.</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              № <BtnSort onClick={sortNumber} value={btnvalue.btnnumber} />
            </th>
            <th>
              Name <BtnSort onClick={sortName} value={btnvalue.btnsortName} />
            </th>
            <th>Nik</th>
            <th>Email</th>
            <th>
              Adress{" "}
              <BtnSort onClick={sortAddress} value={btnvalue.btnsortAdress} />
            </th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id} onClick={() => contactPerson(person)}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{person.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {contactflag ? <Contact contact={contactflag}/> : null}
    </div>
  );
}

export default Table;
