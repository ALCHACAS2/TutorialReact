return (
    <form onSubmit={handleSbmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Add User</button>
    </form>
)