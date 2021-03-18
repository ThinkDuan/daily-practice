class City {
  getData (value) {
    const reg = /.+?(省|市|自治区|自治州|州|县|区)/g;
    const data = value.match(reg);
    const cityData = {
      province: data[0] ? data[0].trim() : '',
      city: data[1] ? data[1].trim() : '',
      county: data[2] ? data[2].trim() : ''
    }
    return cityData
  }
  getDetail (value) {
    const county = this.getCounty(value);
    const data = value.split(county)
    return data[1] ? data[1].trim() : ''
  }
  getCounty (value) {
    const reg = /.+?(省|市|自治区|自治州|州|县|区)/g;
    const data = value.match(reg);
    return data[2] ? data[2].trim() : ''
  }
}
var city = new City()
export default city
