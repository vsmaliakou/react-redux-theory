import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
// import { fetchCustomers } from './asyncActions/customers';
import { asyncDecrementAction, asyncIncrementAction } from './store/cashReducer';
import { fetchCustomers } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  // const addCash = (cash) => {
  //   dispatch({ type: 'ADD_CASH', payload: cash });
  // };

  // const getCash = (cash) => {
  //   dispatch({ type: 'GET_CASH', payload: cash });
  // };

  // const addCustomer = (name) => {
  //   const customer = {
  //     name,
  //     id: Date.now(),
  //   };
  //   dispatch(addCustomerAction(customer));
  // };

  // const removeCustomer = (customer) => {
  //   dispatch(removeCustomerAction(customer.id));
  // };

  return (
    <div className="App">
      <h1>{cash}</h1>
      <div>
        {/* <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button> */}
        <button onClick={() => dispatch(asyncIncrementAction())}>Пополнить счет</button>
        {/* <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button> */}
        <button onClick={() => dispatch(asyncDecrementAction())}>Снять со счета</button>
        {/* <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button> */}
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map(customer => {
            return (
              <div
                key={customer.id}
                style={{ fontSize: '2rem', border: '1px solid black', padding: '10px 20px', marginTop: 5 }}
                // onClick={() => removeCustomer(customer)}
              >
                {customer.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ fontSize: '2rem', marginTop: 20 }}>
          Клиенты отсутствуют
        </div>
      )}
    </div>
  );
}

export default App;
