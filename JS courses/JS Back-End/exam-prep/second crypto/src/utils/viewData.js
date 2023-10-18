exports.getPaymentMethodsView=(current)=>{
    const methods = Object.keys(this.paymentMethods).map((key) => ({
        value: key,
        label: this.paymentMethods[key],
        isSelected: current == key,
    }));
    
}