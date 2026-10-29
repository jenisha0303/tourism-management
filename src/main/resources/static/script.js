// Register Tourist
function registerTourist() {

    const tourist = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        destination: document.getElementById("destination").value,
        travelDate: document.getElementById("travelDate").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8087/tourists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tourist)
    })
    .then(response => response.json())
    .then(data => {
        alert("Registration Successful");
        window.location.href = "login.html";
    })
    .catch(error => {
        alert("Registration Failed");
        console.log(error);
    });
}


// Login (Demo)
function loginTourist() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if(email !== "" && password !== ""){
        alert("Login Successful");
        window.location.href = "packages.html";
    } else {
        alert("Enter Email and Password");
    }

}
function loginUser() {

    const role = document.getElementById("role").value;
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (role === "admin") {

        if (email === "admin@gmail.com" && password === "admin123") {
            alert("Admin Login Successful");
            window.location.href = "admin.html";
        } else {
            alert("Invalid Admin Email or Password");
        }

    } else {

        // Tourist Login
        loginTourist();

    }
}


function loadPackageByPlace() {

    let place = document.getElementById("place").value;

    fetch("http://localhost:8087/packages")
    .then(response => response.json())
    .then(data => {

        let table = document.getElementById("packageTable");
        table.innerHTML = "";

        data.forEach(pkg => {

            if (pkg.location === place) {

                table.innerHTML += `
                <tr>
                    <td>${pkg.id}</td>
                    <td>${pkg.packageName}</td>
                    <td>${pkg.location}</td>
                    <td>${pkg.price}</td>
                    <td>${pkg.description}</td>
                </tr>
                `;
            }

        });

    })
    .catch(error => console.log(error));
}

// Booking
function bookPackage() {

    const booking = {

        touristId: parseInt(document.getElementById("touristId").value),
        packageId: parseInt(document.getElementById("packageId").value),
        bookingDate: document.getElementById("bookingDate").value

    };

    fetch("http://localhost:8087/bookings", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(booking)

    })
    .then(response => response.json())
    .then(data => {
        alert("Booking Successful");
    })
    .catch(error => {
        alert("Booking Failed");
        console.log(error);
    });

}
function loadAdminDashboard() {

    // Total Packages
    fetch("http://localhost:8087/packages")
        .then(response => response.json())
        .then(data => {
            document.getElementById("packageCount").innerText = data.length;
        })
        .catch(error => console.log(error));

    // Total Tourists
    fetch("http://localhost:8087/tourists")
        .then(response => response.json())
        .then(data => {
            document.getElementById("touristCount").innerText = data.length;
        })
        .catch(error => console.log(error));

    // Total Bookings
    fetch("http://localhost:8087/bookings")
        .then(response => response.json())
        .then(data => {
            document.getElementById("bookingCount").innerText = data.length;
        })
        .catch(error => console.log(error));
		loadPackages();
		loadTourists();
}
function addPackage() {

	    const id = document.getElementById("packageId").value;

	    const tourPackage = {
	        packageName: document.getElementById("packageName").value,
	        location: document.getElementById("location").value,
	        price: parseFloat(document.getElementById("price").value),
	        description: document.getElementById("description").value
	    };

	    let url = "http://localhost:8087/packages";
	    let method = "POST";

	    if (id !== "") {
	        url = "http://localhost:8087/packages/" + id;
	        method = "PUT";
	    }

	    fetch(url, {
	        method: method,
	        headers: {
	            "Content-Type": "application/json"
	        },
	        body: JSON.stringify(tourPackage)
	    })
	    .then(response => response.json())
	    .then(data => {
	        alert(id === "" ? "Package Added Successfully" : "Package Updated Successfully");

	        document.getElementById("packageId").value = "";
	        document.getElementById("packageName").value = "";
	        document.getElementById("location").value = "";
	        document.getElementById("price").value = "";
	        document.getElementById("description").value = "";

	        loadAdminDashboard();
	    })
	    .catch(error => {
	        alert("Operation Failed");
	        console.log(error);
	    });
	}
function loadPackages() {

	    fetch("http://localhost:8087/packages")
	        .then(response => response.json())
	        .then(data => {

	            let table = document.getElementById("packageTable");
	            table.innerHTML = "";

	            data.forEach(pkg => {

	                table.innerHTML += `
	                <tr>
	                    <td>${pkg.id}</td>
	                    <td>${pkg.packageName}</td>
	                    <td>${pkg.location}</td>
	                    <td>${pkg.price}</td>
	                    <td>${pkg.description}</td>
	                    <td>
	                        <button onclick="editPackage(${pkg.id}, '${pkg.packageName}', '${pkg.location}', ${pkg.price}, '${pkg.description}')">
	                            Edit
	                        </button>

	                        <button onclick="deletePackage(${pkg.id})">
	                            Delete
	                        </button>
	                    </td>
	                </tr>
	                `;

	            });

	        })
	        .catch(error => console.log(error));
	}
	function editPackage(id, packageName, location, price, description) {

	    document.getElementById("packageId").value = id;
	    document.getElementById("packageName").value = packageName;
	    document.getElementById("location").value = location;
	    document.getElementById("price").value = price;
	    document.getElementById("description").value = description;
	}
	function loadTourists() {

	    fetch("http://localhost:8087/tourists")
	        .then(response => response.json())
	        .then(data => {

	            let table = document.getElementById("touristTable");
	            table.innerHTML = "";

	            data.forEach(tourist => {

	                table.innerHTML += `
	                <tr>
	                    <td>${tourist.id}</td>
	                    <td>${tourist.name}</td>
	                    <td>${tourist.email}</td>
	                    <td>${tourist.phone}</td>
	                    <td>${tourist.destination}</td>
	                </tr>
	                `;

	            });

	        })
	        .catch(error => console.log(error));
	}
	function deletePackage(id) {

	    if (!confirm("Are you sure you want to delete this package?")) {
	        return;
	    }

	    fetch("http://localhost:8087/packages/" + id, {
	        method: "DELETE"
	    })
	    .then(() => {
	        alert("Package Deleted Successfully");
	        loadAdminDashboard();
	    })
	    .catch(error => {
	        alert("Delete Failed");
	        console.log(error);
	    });
	}