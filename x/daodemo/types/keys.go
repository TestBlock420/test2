package types

const (
	// ModuleName defines the module name
	ModuleName = "daodemo"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_daodemo"
)

var (
	ParamsKey = []byte("p_daodemo")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
