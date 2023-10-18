exports.SECRET =
    '81159d5232c3311cd621c517e0abcf20e09acf073a0136cc59b3bd784985f243';

exports.paymentMethods = {
    'crypto-wallet': 'Crypto Wallet',
    'credit-card': 'Credit Card',
    'debit-card': 'Debit Card',
    'paypal': 'PayPal',
};

exports.getPaymentMethodsView=(current)=>{
    const methods = Object.keys(this.paymentMethods).map((key) => ({
        value: key,
        label: this.paymentMethods[key],
        isSelected: current == key,
    }));

    return methods;
}
