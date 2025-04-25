/*
Автомат принимает накопительные скидочные карты и при своем расчете учитывает количество баллов,
по которому начисляет процент скидки:
От 0 до 100 баллов - скидка 1%
От 100 до 200 баллов - скидка 3 %
От 200 до 500 баллов - скидка 5%
От 500 баллов - скидка 10%

Задание: Составить такой набор тестовых данных для автомата,
при котором мы гарантированно будем знать,
что в соответствии со своими накопленными баллами покупатель получит верную скидку.
*/

function automat(score: number): string {
  let res: string;
  if (score > 0 && score < 100) {
    res = '1';
  } else if (score >= 100 && score < 200) {
    res = '3';
  } else if (score >= 200 && score < 500) {
    res = '5';
  } else if (score >= 500) {
    res = '10';
  } else {
    console.log('Score is not valid');
  }
  return res;
}
describe('Test automat', (): void => {
  it('Test automat',(): void => {
    expect(console.log(automat(50))).toEqual('1')
    expect(console.log(automat(99))).toEqual('1')
    expect(console.log(automat(100))).toEqual('3')
    expect(console.log(automat(135))).toEqual('3')
    expect(console.log(automat(199))).toEqual('3')
    expect(console.log(automat(200))).toEqual('5')
    expect(console.log(automat(277))).toEqual('5')
    expect(console.log(automat(460))).toEqual('5')
    expect(console.log(automat(500))).toEqual('10')
    expect(console.log(automat(1760))).toEqual('10')
    expect(console.log(automat(0))).toEqual('Score is not valid')
    expect(console.log(automat(-1))).toEqual('Score is not valid')
  });
});


