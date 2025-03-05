# Time to put some of the SQL Work into Practice

Head on over to the [SQL Practice Site](https://www.w3schools.com/sql/trysql.asp?filename=trysql_desc). This site has prebuilt tables that will work out quite nicely for what we want to do.

Rather than have you try to hop back and forth, here's an overview of each of the tables:

| CUSTOMERS  |              |             |         |      |            |         |
| ---------- | ------------ | ----------- | ------- | ---- | ---------- | ------- |
| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |

| CATEGORIES |              |             |
| ---------- | ------------ | ----------- |
| CategoryID | CategoryName | Description |

| EMPLOYEES  |          |           |           |       |       |
| ---------- | -------- | --------- | --------- | ----- | ----- |
| EmployeeID | LastName | FirstName | BirthDate | Photo | Notes |

| ORDERDETAILS  |         |           |          |
| ------------- | ------- | --------- | -------- |
| OrderDetailID | OrderID | ProductID | Quantity |

| ORDERS  |            |            |           |           |
| ------- | ---------- | ---------- | --------- | --------- |
| OrderID | CustomerID | EmployeeID | OrderDate | ShipperID |

| PRODUCTS  |             |            |            |      |       |
| --------- | ----------- | ---------- | ---------- | ---- | ----- |
| ProductID | ProductName | SupplierID | CategoryID | Unit | Price |

| SHIPPERS  |             |       |
| --------- | ----------- | ----- |
| ShipperID | ShipperName | Phone |

| SUPPLIERS  |              |         |      |            |         |     |
| ---------- | ------------ | ------- | ---- | ---------- | ------- | --- |
| SupplierID | SupplierName | Address | City | PostalCode | Country |

## Now that we know our Schema, let's do the following (making sure that the table returns all useful data, not just the bare minimum)

1. Find all Customers in the USA or Mexico ordered Alphabetically by Contact Name

```SQL
SELECT * FROM Customers
Where Country in ('USA', 'Germany')
Order by ContactName ASC;
```

2. Find all Products that cost more than 40

```SQL
SELECT * FROM Products
Where Price > 40
ORDER BY Price DESC;
```

3. Find all Employees born before 1960.

```SQL
SELECT * FROM Employees
Where Birthdate < #1/1/1960#
Order by Birthdate desc;
```

4. Find all Products that are Beverages

```SQL
SELECT * FROM Products
Where CategoryID = 1;
```

5. Find all Employees who have ordered something that shipped to Spain

```SQL
SELECT e.FirstName, e.LastName, o.OrderID, c.Country
FROM (Employees e
INNER JOIN Orders o
ON e.EmployeeID = o.EmployeeID
)
INNER JOIN Customers c
ON c.CustomerID = o.CustomerID
WHERE c.Country = 'Spain';
```

6. Find all Orders with a total price over 2000 sorted from most expensive to least expensive.

```SQL

```
