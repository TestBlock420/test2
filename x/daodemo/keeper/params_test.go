package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "daodemo/testutil/keeper"
	"daodemo/x/daodemo/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.DaodemoKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
