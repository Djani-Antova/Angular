function getIdentity<T>(id: T) {
    console.log(id);

}
getIdentity<string>('firstName')
getIdentity<number>(123)

enum PaymentStatus {
    Failed,
    Succesful,
    Pending
}

