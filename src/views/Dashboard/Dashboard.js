import React, { PureComponent } from 'react'
import faker from 'faker';
import Headline from '../../components/Headline';
import {
  default as TransactionsList,
  TransactionItem
} from '../../components/TransactionsList';

const getRandomTransaction = () => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  date: faker.date.future(),
  image: faker.image.animals(),
  price: Number(faker.finance.amount(0, 1000, 2, '-')),
});

const getRandomData = (min = 4, max = 8) => {

  const range = Math.floor(Math.random() * (max - min + 1)) + min;
  const data = new Array(range).fill(null);
  const newData = data.map(o => getRandomTransaction());
  console.log(newData)
  return newData;
};

class Dashboard extends PureComponent {
  render() {
    return (
      <div>
        <Headline title="Dashboard">August 2018</Headline>
        <br />
        <TransactionsList title="6 due this month">
          {getRandomData().map(o => (
            <TransactionItem key={o.id} title={o.title} date={o.date.toDateString()} image={o.image}>
              {o.price}
            </TransactionItem>
          ))}
        </TransactionsList>
      </div>
    );
  }
}

export default Dashboard;
