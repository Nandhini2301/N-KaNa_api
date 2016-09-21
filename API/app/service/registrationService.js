module.exports = function (testmodel) {
    var registrationService = {};
    //insert data from volunteer registration page to profile and profile info model
    registrationService.InsertProfile = function (req, profilemodel, profileinfomodel, login, Sequelize, callBack) {
        console.log("Welcome");
        var role = req.body.role;
        var name = req.body.name;
        var dob = req.body.dob;
        var age = req.body.age;
        var gender = req.body.gender;
        var course = req.body.course;
        var area_of_expertise = req.body.area_of_expertise;
        var department = req.body.department;
        var institution = req.body.institution;
        var address_line1 = req.body.address_line1;
        var address_line2 = req.body.address_line2;
        var code = req.body.code;
        var state = req.body.state;
        var city = req.body.city;
        var postal_code = req.body.postal_code;
        var address = req.body.address;
        var country = req.body.country;
        var mobile_no = req.body.mobile_no;
        var phone = req.body.phone;
        var email_id = req.body.email_id;
        var password = req.body.password;
        var work_type = req.body.work_type;
        var reference = req.body.reference;
        var commitment = req.body.commitment;
        var designation = req.body.designation;
        var organization = req.body.organization;
        var expertise = req.body.expertise;
        var experience = req.body.experience;
        var cv = req.body.cv;
        var photo = req.body.photo;
        var center = req.body.center;

        profilemodel.create({
            role: role,
            name: name,
            // dob: dob,
            age: age,
            gender: gender,
            address_line1: address_line1,
            address_line2: address_line2,
            code: code,
            state: state,
            city: city,
            postal_code: postal_code,
            country: country,
            mobile_no: mobile_no,
            email_id: email_id,
            password: password,
            phone: phone

        }).then(function (result) {
            console.log("sucses");
            console.log(result.id);
            profileinfomodel.belongsTo(profilemodel, { foreignKey: 'profile_id' });
            profileinfomodel.create({
                profile_id: result.id,
                course: course,
                work_type: work_type,
                department: department,
                institution: institution,
                reference: reference,
                commitment: commitment,
                designation: designation,
                organization: organization,
                area_of_expertise: area_of_expertise,
                experience: experience,
                cv: cv,
                photo: photo,
            }).then(function (results) {
                login.create({
                    email_id:email_id,
                    role:role,
                    password:password
                }).then(function (ress){
                    console.log("suces inside");
                var res = {};
                res.profile = results;
                res.profileinfo = result;
                res.login = ress;
                callBack(res);
                })
                
            })

        }).catch(function (error) {
            callBack(error);
        });

    };
      return registrationService;
}